> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/seterrorandreturn)

# NSCoder.DecodingFailurePolicy.setErrorAndReturn (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A failure policy that directs the coder to capture the failure as an error object.

## Declaration

```swift
case setErrorAndReturn
```

<a id="Discussion"></a>

## Discussion

On decode failure, the [NSCoder](../../nscoder.md) will capture the failure as an [NSError](../../nserror.md), and prevent further decodes (by returning `0` / `nil` equivalent as appropriate).

Use this policy if you know that all encoded objects use [failWithError(\_:)](../failwitherror%28__%29.md) to communicate decode failures and don’t raise exceptions for error propagation.

## See Also

### Failure Policies

- [NSCoder.DecodingFailurePolicy.raiseException](raiseexception.md): A failure policy that directs the coder to raise an exception.

# NSDecodingFailurePolicySetErrorAndReturn (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A failure policy that directs the coder to capture the failure as an error object.

## Declaration

```objectivec
NSDecodingFailurePolicySetErrorAndReturn
```

<a id="Discussion"></a>

## Discussion

On decode failure, the [NSCoder](../../nscoder.md) will capture the failure as an [NSError](../../nserror.md), and prevent further decodes (by returning `0` / `nil` equivalent as appropriate).

Use this policy if you know that all encoded objects use [failWithError:](../failwitherror%28__%29.md) to communicate decode failures and don’t raise exceptions for error propagation.

## See Also

### Failure Policies

- [NSDecodingFailurePolicyRaiseException](raiseexception.md): A failure policy that directs the coder to raise an exception.
