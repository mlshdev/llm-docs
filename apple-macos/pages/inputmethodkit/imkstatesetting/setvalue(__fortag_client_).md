> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkstatesetting/setvalue(_:fortag:client:)](https://developer.apple.com/documentation/inputmethodkit/imkstatesetting/setvalue(_:fortag:client:))

# setValue(\_:forTag:client:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Set the value for the provided key.

## Declaration

```swift
func setValue(_ value: Any!, forTag tag: Int, client sender: Any!)
```

## Parameters

- `value`: The value, specified as the appropriate object (such as `NSNumber`), to set.
- `tag`: The key whose value you want to set.
- `sender`: The client setting the value.

## See Also

### Getting and Setting Values

- [value(forTag:client:)](value%28fortag_client_%29.md): Returns a value object whose key is the provided tag.

# setValue:forTag:client: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Set the value for the provided key.

## Declaration

```objectivec
- (void) setValue:(id) value forTag:(long) tag client:(id) sender;
```

## Parameters

- `value`: The value, specified as the appropriate object (such as `NSNumber`), to set.
- `tag`: The key whose value you want to set.
- `sender`: The client setting the value.

## See Also

### Getting and Setting Values

- [valueForTag:client:](value%28fortag_client_%29.md): Returns a value object whose key is the provided tag.
