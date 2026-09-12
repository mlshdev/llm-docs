> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/inputtext(_:key:modifiers:client:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/inputtext(_:key:modifiers:client:))

# inputText(\_:key:modifiers:client:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Receives Unicode, the key code that generated it, and any modifier flags.

## Declaration

```swift
func inputText(_ string: String!, key keyCode: Int, modifiers flags: Int, client sender: Any!) -> Bool
```

## Parameters

- `string`: The text input by the client.
- `keyCode`: The key code for the associated Unicode.
- `flags`: The modifier flags.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the input is  accepted; otherwise [NO](../no.md).

# inputText:key:modifiers:client: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Receives Unicode, the key code that generated it, and any modifier flags.

## Declaration

```objectivec
- (BOOL) inputText:(NSString *) string key:(NSInteger) keyCode modifiers:(NSUInteger) flags client:(id) sender;
```

## Parameters

- `string`: The text input by the client.
- `keyCode`: The key code for the associated Unicode.
- `flags`: The modifier flags.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the input is  accepted; otherwise [NO](../no.md).
