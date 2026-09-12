> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/data-types](https://developer.apple.com/documentation/retentionmessaging/data-types)

# Data types

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** API Collection

Refer to these data types for request and response payloads.

## Topics

### Images

- [imageIdentifier](imageidentifier.md): A unique identifier for an image that you provide when you upload the image.
- [imageState](imagestate.md): The approval state of an image.
- [imageSize](imagesize.md): The size of an image.
- [altText](alttext.md): The alternative text for a corresponding image.

### Messages

- [messageIdentifier](messageidentifier.md): A unique identifier for a message, which you provide when you upload the message.
- [messageState](messagestate.md): The approval state of the message.
- [body](body.md): The body text you provide for a message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [header](header.md): The header text you provide that appears above the body text in a message.
- [headerPosition](headerposition.md): The position where the header text appears in a message.

### Default message configuration

- [locale](locale.md): A string that represents a locale short code.
- [productId](productid.md): A unique identifier for a product, which you create in App Store Connect.

### Real-time request body

- [signedPayload](signedpayload.md): The payload in a JSON Web Signature (JWS) format, signed by the App Store.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of an In-App Purchase.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [requestIdentifier](requestidentifier.md): A unique identifier the App Store server creates for its requests.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [environment](environment.md): The server environment, either sandbox or production.

### Real-time request header

- [JWSDecodedHeader](jwsdecodedheader.md): A decoded JSON Web Signature (JWS) header.
- [alg](alg.md): An algorithm you use to sign a JSON Web Signature (JWS).
- [x5c](x5c.md): A JSON Web Signature (JWS) header parameter that contains the certificate chain that corresponds to the key you use to digitally sign the JWS.

### Real-time response body

- [message](message.md): A message identifier you provide in a real-time response to your Get Retention Message endpoint.
- [alternateProduct](alternateproduct.md): A switch-plan message and product ID you provide in a real-time response to your Get Retention Message endpoint.
- [promotionalOffer](promotionaloffer.md): A promotional offer and message you provide in a real-time response to your Get Retention Message endpoint.
- [advancedCommerceInfo](advancedcommerceinfo.md): A response object you provide to present an offer or switch-plan recommendation message.

### Real-time URL

- [realtimeURL](realtimeurl.md): A string that contains the URL you provide for your Get Retention Message endpoint.

### Performance testing

- [PerformanceTestConfig](performancetestconfig.md): An object that enumerates the test configuration parameters.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResponseTimes](performancetestresponsetimes.md): An object that describes test response times.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
- [PerformanceTestStatus](performanceteststatus.md): The status of the performance test.
- [Failures](failures.md): A map of server-to-server notification failure reasons and counts that represent the number of failures during a performance test.
- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.
- [requestId](requestid.md): The identifier of the performance test request.

### Promotional offer signature V2

- [promotionalOfferSignatureV2](promotionaloffersignaturev2.md): The promotional-offer signature you generate in a JSON Web Signature (JWS) format.

### Promotional offer signature V1

- [promotionalOfferSignatureV1](promotionaloffersignaturev1.md): The promotional-offer signature you generate using an earlier signature version.

### Advanced commerce information

- [advancedCommerceData](advancedcommercedata.md): A Base64-encoded JSON object which contains a JWS with information describing an offer or switch-plan recommendation.

### Alternate product information

- [billingPlanType](billingplantype.md)
