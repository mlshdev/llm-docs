> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/inputtext(_:client:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/inputtext(_:client:))

# inputText(\_:client:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Handles key down events that do not map to an action method.

## Declaration

```swift
func inputText(_ string: String!, client sender: Any!) -> Bool
```

## Parameters

- `string`: The key down event, which is the text input by the client.
- `sender`: The client object sending the key down events.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the input is accepted; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

An input method should implement this method when using key binding (that is, it implements [didCommand(by:client:)](didcommand%28by_client_%29.md)).

# inputText:client: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Handles key down events that do not map to an action method.

## Declaration

```objectivec
- (BOOL) inputText:(NSString *) string client:(id) sender;
```

## Parameters

- `string`: The key down event, which is the text input by the client.
- `sender`: The client object sending the key down events.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the input is accepted; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

An input method should implement this method when using key binding (that is, it implements [didCommandBySelector:client:](didcommand%28by_client_%29.md)).
