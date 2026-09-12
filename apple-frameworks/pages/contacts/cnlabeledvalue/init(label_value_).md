> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/init(label:value:)](https://developer.apple.com/documentation/contacts/cnlabeledvalue/init(label:value:))

# init(label:value:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new labeled value identifier.

## Declaration

```swift
init(label: String?, value: ValueType)
```

## Parameters

- `label`: A string value for the label portion of the object, or `nil` if the value doesn’t have a label.
- `value`: A value for the labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

A new labeled value object.

# initWithLabel:value: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new labeled value identifier.

## Declaration

```objectivec
- (instancetype) initWithLabel:(NSString *) label value:(ValueType) value;
```

## Parameters

- `label`: A string value for the label portion of the object, or `nil` if the value doesn’t have a label.
- `value`: A value for the labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

A new labeled value object.

## See Also

### Creating a labeled value

- [labeledValueWithLabel:value:](labeledvaluewithlabel_value_.md): Returns a new labeled value identifier.
