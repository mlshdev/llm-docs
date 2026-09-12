> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/recordtype](https://developer.apple.com/documentation/opendirectory/odrecord/recordtype)

# recordType (Swift)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The record’s type.

## Declaration

```swift
var recordType: String! { get }
```

## See Also

### Managing Record Attributes

- [addValue(\_:toAttribute:)](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetails(forAttributes:)](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [removeValues(forAttribute:)](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue(\_:fromAttribute:)](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronize()](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [values(forAttribute:)](values%28forattribute_%29.md): Returns the values of an attribute of the record.

# recordType (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The record’s type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * recordType;
```

## See Also

### Managing Record Attributes

- [addValue:toAttribute:error:](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetailsForAttributes:error:](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [removeValuesForAttribute:error:](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue:fromAttribute:error:](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue:forAttribute:error:](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronizeAndReturnError:](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [valuesForAttribute:error:](values%28forattribute_%29.md): Returns the values of an attribute of the record.
