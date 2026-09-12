> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/labeledvaluewithlabel:value:](https://developer.apple.com/documentation/contacts/cnlabeledvalue/labeledvaluewithlabel:value:)

# labeledValueWithLabel:value:

**Interface language:** Objective-C

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new labeled value identifier.

## Declaration

```objectivec
+ (instancetype) labeledValueWithLabel:(NSString *) label value:(ValueType) value;
```

## Parameters

- `label`: A string value for the label of the labeled value object, or `nil` if the value doesn’t have a label.
- `value`: A value for the labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

A new labeled value object.

## See Also

### Creating a labeled value

- [initWithLabel:value:](init%28label_value_%29.md): Returns a new labeled value identifier.
