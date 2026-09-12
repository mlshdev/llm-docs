> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class/uniqueid](https://developer.apple.com/documentation/addressbook/abrecord-swift.class/uniqueid)

# uniqueId (Swift)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS

Returns the unique ID for a record.

## Declaration

```swift
var uniqueId: String! { get }
```

<a id="return-value"></a>

## Return Value

The unique ID.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [value(forProperty:)](value%28forproperty_%29.md), passing `kABUIDProperty` as the argument.

## See Also

### Getting Identifying Information

- [displayName](displayname.md): A user-visible string representing the record.

# uniqueId (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS

Returns the unique ID for a record.

## Declaration

```objectivec
@property (copy, readonly) NSString * uniqueId;
```

<a id="return-value"></a>

## Return Value

The unique ID.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [valueForProperty:](value%28forproperty_%29.md), passing `kABUIDProperty` as the argument.

## See Also

### Getting Identifying Information

- [displayName](displayname.md): A user-visible string representing the record.
