import { Selector } from 'testcafe';

fixture`Login`
    .page`https://etalente.co.za`;

const username = Selector('#mat-input-0');
const password = Selector('#mat-input-1');
const logiBTN = Selector('button').withText("Login");
const wrongPW = Selector('p').withText("Invalid credentials provided");


test('Failed logon', async t => {
    await t
        .typeText(username, 'mxohdapage@gmail.com')
        .typeText(password, '12345')
        .click(logiBTN)
        .expect(wrongPW.innerText).contains('Invalid credentials provided');
});