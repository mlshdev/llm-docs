> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/init(forreadingfrom:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/init(forreadingfrom:))

# init(forReadingFrom:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes an archiver to decode data from the specified location.

## Declaration

```swift
init(forReadingFrom data: Data) throws
```

## Parameters

- `data`: An archive previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

<a id="Discussion"></a>

## Discussion

This initializer enables [requiresSecureCoding](requiressecurecoding.md) by default, and sets the [decodingFailurePolicy](decodingfailurepolicy.md) to [NSCoder.DecodingFailurePolicy.setErrorAndReturn](../nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn.md).

Call [finishDecoding()](finishdecoding%28%29.md) when you finish decoding data

This method throws an error if `data` isn’t a valid keyed archive.

> **Important**

>  If you are adapting existing code to use this initializer, make sure you have adopted [NSSecureCoding](../nssecurecoding.md) in the types you decode. If any call to a `decode`-prefixed method fails, the default [decodingFailurePolicy](decodingfailurepolicy.md) sets the [error](../nscoder/error.md) rather than throwing an exception. In this case, the current and all subsequent decode calls return `0` or `nil`.

## See Also

### Creating a Keyed Unarchiver

- [init()](init%28%29.md): Deprecated. Initializes an archiver to decode data.
- [init(forReadingWith:)](init%28forreadingwith_%29.md): Deprecated. Initializes an archiver to decode data from the specified location.

# initForReadingFromData:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes an archiver to decode data from the specified location.

## Declaration

```objectivec
- (instancetype) initForReadingFromData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: An archive previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

This initializer enables [requiresSecureCoding](requiressecurecoding.md) by default, and sets the [decodingFailurePolicy](decodingfailurepolicy.md) to [NSDecodingFailurePolicySetErrorAndReturn](../nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn.md).

Call [finishDecoding](finishdecoding%28%29.md) when you finish decoding data

This method throws an error if `data` isn’t a valid keyed archive.

> **Important**

>  If you are adapting existing code to use this initializer, make sure you have adopted [NSSecureCoding](../nssecurecoding.md) in the types you decode. If any call to a `decode`-prefixed method fails, the default [decodingFailurePolicy](decodingfailurepolicy.md) sets the [error](../nscoder/error.md) rather than throwing an exception. In this case, the current and all subsequent decode calls return `0` or `nil`.

## See Also

### Creating a Keyed Unarchiver

- [init](init%28%29.md): Deprecated. Initializes an archiver to decode data.
- [initForReadingWithData:](init%28forreadingwith_%29.md): Deprecated. Initializes an archiver to decode data from the specified location.
