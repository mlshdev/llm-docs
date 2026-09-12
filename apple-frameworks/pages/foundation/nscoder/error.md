> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/error](https://developer.apple.com/documentation/foundation/nscoder/error)

# error (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error in the top-level encode.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The meaning of this property depends on the setting of the [decodingFailurePolicy](decodingfailurepolicy-swift.property.md) property. For [NSCoder.DecodingFailurePolicy.raiseException](decodingfailurepolicy-swift.enum/raiseexception.md), this property is always `nil`. For [NSCoder.DecodingFailurePolicy.setErrorAndReturn](decodingfailurepolicy-swift.enum/seterrorandreturn.md), a non-`nil` value represents the first error encountered while decoding the archive.

## See Also

### Managing Decode Errors

- [failWithError(\_:)](failwitherror%28__%29.md): Signals to this coder that the decode operation has failed.

# error (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error in the top-level encode.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The meaning of this property depends on the setting of the [decodingFailurePolicy](decodingfailurepolicy-swift.property.md) property. For [NSDecodingFailurePolicyRaiseException](decodingfailurepolicy-swift.enum/raiseexception.md), this property is always `nil`. For [NSDecodingFailurePolicySetErrorAndReturn](decodingfailurepolicy-swift.enum/seterrorandreturn.md), a non-`nil` value represents the first error encountered while decoding the archive.

## See Also

### Managing Decode Errors

- [failWithError:](failwitherror%28__%29.md): Signals to this coder that the decode operation has failed.
