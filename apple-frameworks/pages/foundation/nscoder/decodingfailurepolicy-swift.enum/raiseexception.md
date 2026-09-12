> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/raiseexception](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.enum/raiseexception)

# NSCoder.DecodingFailurePolicy.raiseException (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A failure policy that directs the coder to raise an exception.

## Declaration

```swift
case raiseException
```

<a id="Discussion"></a>

## Discussion

With this policy, the [NSCoder](../../nscoder.md) raises an exception internally to propagate failure messages (and unwind the stack). In Objective-C, this exception can be transformed into an [NSError](../../nserror.md) via methods like [decodeTopLevelObjectAndReturnError:](../decodetoplevelobjectandreturnerror_.md)

## See Also

### Failure Policies

- [NSCoder.DecodingFailurePolicy.setErrorAndReturn](seterrorandreturn.md): A failure policy that directs the coder to capture the failure as an error object.

# NSDecodingFailurePolicyRaiseException (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A failure policy that directs the coder to raise an exception.

## Declaration

```objectivec
NSDecodingFailurePolicyRaiseException
```

<a id="Discussion"></a>

## Discussion

With this policy, the [NSCoder](../../nscoder.md) raises an exception internally to propagate failure messages (and unwind the stack). In Objective-C, this exception can be transformed into an [NSError](../../nserror.md) via methods like [decodeTopLevelObjectAndReturnError:](../decodetoplevelobjectandreturnerror_.md)

## See Also

### Failure Policies

- [NSDecodingFailurePolicySetErrorAndReturn](seterrorandreturn.md): A failure policy that directs the coder to capture the failure as an error object.
