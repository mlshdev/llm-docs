> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesessionhandler/sessioninvalidated(error:)

# sessionInvalidated(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Notifies the handler when its feature session ends.

## Declaration

```swift
func sessionInvalidated(error: (any Error)?)
```

## Parameters

- `error`: An optional error that indicates why the session ends. A `nil` value indicates ordinary completion.

<a id="discussion"></a>

## Discussion

Release your reference to the session when the system calls this method.

## See Also

### Handling the session life cycle

- [sessionStarted(\_:)](sessionstarted%28__%29.md): Beta. Notifies the handler when its feature session starts.
