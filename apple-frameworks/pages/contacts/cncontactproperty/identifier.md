> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactproperty/identifier](https://developer.apple.com/documentation/contacts/cncontactproperty/identifier)

# identifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The identifier of the labeled value in the array of labeled.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

Identifier is used only for properties in labeled arrays. If the property is not an array of labeled values, the value of the identifier is `nil`.

## See Also

### Getting the Property Information

- [key](key.md): The key of the contact property.
- [value](value.md): The value of the property.
- [label](label.md): The label of the labeled value of the property array.

# identifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The identifier of the labeled value in the array of labeled.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Identifier is used only for properties in labeled arrays. If the property is not an array of labeled values, the value of the identifier is `nil`.

## See Also

### Getting the Property Information

- [key](key.md): The key of the contact property.
- [value](value.md): The value of the property.
- [label](label.md): The label of the labeled value of the property array.
