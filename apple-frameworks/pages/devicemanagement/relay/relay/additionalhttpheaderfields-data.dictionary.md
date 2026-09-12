> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/relay/relay/additionalhttpheaderfields-data.dictionary](https://developer.apple.com/documentation/devicemanagement/relay/relay/additionalhttpheaderfields-data.dictionary)

# Relay.Relay.AdditionalHTTPHeaderFields

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ · visionOS 1.0+ (deprecated in 27.0)

A custom HTTP header key field name.

> Use the declarative management `com.apple.configuration.network.relay` configuration on platforms where it is available.

## Declaration

```
object Relay.Relay.AdditionalHTTPHeaderFields
```

## Properties

- `ANY` — `string` (required): The HTTP header field value for the corresponding header field name.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
