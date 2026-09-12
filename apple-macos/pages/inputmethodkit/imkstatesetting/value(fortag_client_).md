> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkstatesetting/value(fortag:client:)](https://developer.apple.com/documentation/inputmethodkit/imkstatesetting/value(fortag:client:))

# value(forTag:client:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a value object whose key is the provided tag.

## Declaration

```swift
func value(forTag tag: Int, client sender: Any!) -> Any!
```

## Parameters

- `tag`: The key whose value you want to retrieve.
- `sender`: The client requesting the value.

<a id="return-value"></a>

## Return Value

The value object.

## See Also

### Getting and Setting Values

- [setValue(\_:forTag:client:)](setvalue%28__fortag_client_%29.md): Set the value for the provided key.

# valueForTag:client: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a value object whose key is the provided tag.

## Declaration

```objectivec
- (id) valueForTag:(long) tag client:(id) sender;
```

## Parameters

- `tag`: The key whose value you want to retrieve.
- `sender`: The client requesting the value.

<a id="return-value"></a>

## Return Value

The value object.

## See Also

### Getting and Setting Values

- [setValue:forTag:client:](setvalue%28__fortag_client_%29.md): Set the value for the provided key.
