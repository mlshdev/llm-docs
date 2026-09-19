> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/lacontext/invalidate()

# invalidate() (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Invalidates the authentication context.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

Calling this method stops any pending policy evaluations, causing them to fail with the [LAError.Code.appCancel](../laerror-swift.struct/code/appcancel.md) error code. Once an authentication context has been invalidated, it cannot be used for policy evaluation. Invalidating a context that has been already invalidated has no effect.

# invalidate (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Invalidates the authentication context.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

Calling this method stops any pending policy evaluations, causing them to fail with the [LAErrorAppCancel](../laerror-swift.struct/code/appcancel.md) error code. Once an authentication context has been invalidated, it cannot be used for policy evaluation. Invalidating a context that has been already invalidated has no effect.
