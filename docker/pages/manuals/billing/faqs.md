> Commit-pinned source for Docker main: [content/manuals/billing/faqs.md](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/content/manuals/billing/faqs.md)

# Billing FAQs

## What happens if my subscription payment fails?

If your subscription payment fails, there is a grace period of 15 days,
including the due date. Docker attempts to collect the payment three times using
the following schedule:

- 3 days after the due date
- 5 days after the previous attempt
- 7 days after the previous attempt

Docker also sends an email notification
`Action Required - Credit Card Payment Failed` with an attached unpaid invoice
after each failed payment attempt.

If the invoice remains unpaid after the grace period, the
subscription downgrades to a free subscription and all paid features are
disabled.

## Can I manually retry a failed payment?

Yes. If your payment fails, select **Pay now** to retry the payment through
Stripe.

Before retrying, verify that your default payment method is up to date. For
instructions, see
[Manage a payment method](https://docs.docker.com/billing/payment-method/#manage-payment-method).

## Does Docker collect sales tax and VAT?

Docker collects sales tax or VAT from the following customers:

- For United States customers, Docker began collecting sales tax on
  July 1, 2024.
- For European customers, Docker began collecting VAT on March 1, 2025.
- For United Kingdom customers, Docker began collecting VAT on May 1, 2025.

To help ensure correct tax assessments, keep your
[billing information](https://docs.docker.com/billing/details/) up to date. For details on
adding a VAT number or submitting a US tax exemption certificate, see
[Taxes](https://docs.docker.com/billing/tax-certificate/).

## Does Docker offer academic pricing?

For academic pricing, contact the
[Docker Sales Team](https://www.docker.com/company/contact).

## Can I use pay by invoice for upgrades or additional seats?

No. Pay by invoice is only available for renewing annual subscriptions, not for
purchasing upgrades or additional seats. You must use card payment or US bank
accounts for these changes.

For a list of supported payment methods, see
[Add or update a payment method](https://docs.docker.com/billing/payment-method/).
