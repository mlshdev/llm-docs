> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/settingvalue(_:)](https://developer.apple.com/documentation/contacts/cnlabeledvalue/settingvalue(_:))

# settingValue(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new value for an existing label and identifier.

## Declaration

```swift
func settingValue(_ value: ValueType) -> Self
```

## Parameters

- `value`: A new value for the copied labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

The [CNLabeledValue](../cnlabeledvalue.md) object with an existing label and identifier.

## See Also

### Setting labels and values

- [settingLabel(\_:)](settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [settingLabel(\_:value:)](settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.

# labeledValueBySettingValue: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new value for an existing label and identifier.

## Declaration

```objectivec
- (instancetype) labeledValueBySettingValue:(ValueType) value;
```

## Parameters

- `value`: A new value for the copied labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

The [CNLabeledValue](../cnlabeledvalue.md) object with an existing label and identifier.

## See Also

### Setting labels and values

- [labeledValueBySettingLabel:](settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [labeledValueBySettingLabel:value:](settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.
