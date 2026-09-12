> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/gettokenrequest/tokenparameters-data.dictionary](https://developer.apple.com/documentation/devicemanagement/gettokenrequest/tokenparameters-data.dictionary)

# GetTokenRequest.TokenParameters

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.1+

Parameters that the system uses to generate the token.

## Declaration

```
object GetTokenRequest.TokenParameters
```

## Properties

- `PhoneUDID` — `string`: The identifier of the phone paired to the watch. The `com.apple.watch.pairing` service type requires this key.

  Available: iOS 17+ | iPadOS 17+
- `SecurityToken` — `string`: A security token to generate the server token. The `com.apple.watch.pairing` service type requires this key.

  Available: iOS 17+ | iPadOS 17+
- `WatchUDID` — `string`: The identifier of the watch paired to the phone. The `com.apple.watch.pairing` service type requires this key.

  Available: iOS 17+ | iPadOS 17+
