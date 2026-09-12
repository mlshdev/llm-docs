> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/recordclass(fromuniqueid:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/recordclass(fromuniqueid:))

# recordClass(fromUniqueId:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the class name of the record that matches the given unique ID.

## Declaration

```swift
func recordClass(fromUniqueId uniqueId: String!) -> String!
```

## Parameters

- `uniqueId`: The unique ID of the record.

<a id="return-value"></a>

## Return Value

The name of the class of the record, for example `ABPerson`.

# recordClassFromUniqueId: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the class name of the record that matches the given unique ID.

## Declaration

```objectivec
- (NSString *) recordClassFromUniqueId:(NSString *) uniqueId;
```

## Parameters

- `uniqueId`: The unique ID of the record.

<a id="return-value"></a>

## Return Value

The name of the class of the record, for example `ABPerson`.
