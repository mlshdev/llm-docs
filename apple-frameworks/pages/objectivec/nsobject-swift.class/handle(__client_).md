> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/handle(_:client:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/handle(_:client:))

# handle(\_:client:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Handles key down and mouse events.

## Declaration

```swift
func handle(_ event: NSEvent!, client sender: Any!) -> Bool
```

## Parameters

- `event`: The event to handle.
- `sender`: The client object sending the event.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the event is handled; otherwise [NO](../no.md).

# handleEvent:client: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Handles key down and mouse events.

## Declaration

```objectivec
- (BOOL) handleEvent:(NSEvent *) event client:(id) sender;
```

## Parameters

- `event`: The event to handle.
- `sender`: The client object sending the event.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the event is handled; otherwise [NO](../no.md).
