> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkstatesetting/modes(_:)](https://developer.apple.com/documentation/inputmethodkit/imkstatesetting/modes(_:))

# modes(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the modes dictionary associated with the input method.

## Declaration

```swift
func modes(_ sender: Any!) -> [AnyHashable : Any]!
```

## Parameters

- `sender`: The client object requesting the modes dictionary.

<a id="return-value"></a>

## Return Value

The modes dictionary associated with the input method.

<a id="Discussion"></a>

## Discussion

Typically a client object calls this method to to build the text input menu. By calling the input method rather than reading the modes from the `Info.plist` file, the input method can dynamically modify the modes supported.

# modes: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the modes dictionary associated with the input method.

## Declaration

```objectivec
- (NSDictionary *) modes:(id) sender;
```

## Parameters

- `sender`: The client object requesting the modes dictionary.

<a id="return-value"></a>

## Return Value

The modes dictionary associated with the input method.

<a id="Discussion"></a>

## Discussion

Typically a client object calls this method to to build the text input menu. By calling the input method rather than reading the modes from the `Info.plist` file, the input method can dynamically modify the modes supported.
