> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/cancel()

# cancel() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.2+

Cancels a web authentication session.

## Declaration

```swift
func cancel()
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

<a id="Discussion"></a>

## Discussion

If the session has already presented a view with the authentication webpage, calling this method dismisses that view. Calling [cancel()](cancel%28%29.md) on an already canceled session has no effect.

## See Also

### Starting and Stopping a Session

- [canStart](canstart.md): A Boolean indicating whether the session can begin.
- [start()](start%28%29.md): Starts a web authentication session.

# cancel (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.2+

Cancels a web authentication session.

## Declaration

```objectivec
- (void) cancel;
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

<a id="Discussion"></a>

## Discussion

If the session has already presented a view with the authentication webpage, calling this method dismisses that view. Calling [cancel](cancel%28%29.md) on an already canceled session has no effect.

## See Also

### Starting and Stopping a Session

- [canStart](canstart.md): A Boolean indicating whether the session can begin.
- [start](start%28%29.md): Starts a web authentication session.
