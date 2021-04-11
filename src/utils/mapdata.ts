export function mapUsersToTable(data: Array<any> = []) {
    return data.map(user => ({
        fullName: `${user.first_name} ${user.last_name}`,
        phone: user.phone_number,
        email: user.email,
        adress: user.address.street_address,
        iban: user.credit_card.cc_number,
        bic: "12345678",
    }))
}