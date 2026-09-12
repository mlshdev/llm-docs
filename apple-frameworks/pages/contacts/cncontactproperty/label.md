> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactproperty/label](https://developer.apple.com/documentation/contacts/cncontactproperty/label)

# label (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The label of the labeled value of the property array.

## Declaration

```swift
var label: String? { get }
```

<a id="Discussion"></a>

## Discussion

Labeled property is used only for properties that are in labeled arrays. If the property is not an array of labeled values, the value of the label is `nil`.

## See Also

### Getting the Property Information

- [key](key.md): The key of the contact property.
- [value](value.md): The value of the property.
- [identifier](identifier.md): The identifier of the labeled value in the array of labeled.

# label (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The label of the labeled value of the property array.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * label;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

Labeled property is used only for properties that are in labeled arrays. If the property is not an array of labeled values, the value of the label is `nil`.

## See Also

### Getting the Property Information

- [key](key.md): The key of the contact property.
- [value](value.md): The value of the property.
- [identifier](identifier.md): The identifier of the labeled value in the array of labeled.
