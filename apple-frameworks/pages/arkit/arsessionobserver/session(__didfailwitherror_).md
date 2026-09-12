> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:didfailwitherror:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didfailwitherror:))

# session(\_:didFailWithError:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has stopped running due to an error.

## Declaration

```swift
optional func session(_ session: ARSession, didFailWithError error: any Error)
```

## Parameters

- `session`: The session providing information.
- `error`: An object describing the failure.

## See Also

### Handling Errors

- [ARErrorDomain](../arerrordomain.md): The domain for error objects produced by an AR session.

# session:didFailWithError: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has stopped running due to an error.

## Declaration

```objectivec
- (void) session:(ARSession *) session didFailWithError:(NSError *) error;
```

## Parameters

- `session`: The session providing information.
- `error`: An object describing the failure.

## See Also

### Handling Errors

- [ARErrorDomain](../arerrordomain.md): The domain for error objects produced by an AR session.
