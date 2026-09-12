> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-swift.struct/init(first:second:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-swift.struct/init(first:second:))

# init(first:second:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes an assertion output structure with one or two keys.

## Declaration

```swift
init(first: SymmetricKey, second: SymmetricKey?)
```

## Parameters

- `first`: A symmetric key that’s unique to the passkey and derives from the first input.
- `second`: A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.
