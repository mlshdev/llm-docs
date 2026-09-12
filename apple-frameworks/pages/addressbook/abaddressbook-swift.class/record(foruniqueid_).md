> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/record(foruniqueid:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/record(foruniqueid:))

# record(forUniqueId:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the person or group record that matches the given unique ID.

## Declaration

```swift
func record(forUniqueId uniqueId: String!) -> ABRecord!
```

## Parameters

- `uniqueId`: The unique ID of the record. This value must not be `nil`; otherwise, an exception is raised.

<a id="return-value"></a>

## Return Value

The person or group record that matches the given unique ID.

<a id="Discussion"></a>

## Discussion

If no record has the given ID, this method returns `nil`.

# recordForUniqueId: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the person or group record that matches the given unique ID.

## Declaration

```objectivec
- (ABRecord *) recordForUniqueId:(NSString *) uniqueId;
```

## Parameters

- `uniqueId`: The unique ID of the record. This value must not be `nil`; otherwise, an exception is raised.

<a id="return-value"></a>

## Return Value

The person or group record that matches the given unique ID.

<a id="Discussion"></a>

## Discussion

If no record has the given ID, this method returns `nil`.
