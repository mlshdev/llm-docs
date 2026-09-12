> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/addmember(_:)](https://developer.apple.com/documentation/addressbook/abgroup/addmember(_:))

# addMember(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a person to a group.

## Declaration

```swift
func addMember(_ person: ABPerson!) -> Bool
```

## Parameters

- `person`: The person record to be added.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `person` argument is already part of the group, this method does nothing and returns [true](https://developer.apple.com/documentation/swift/true). If the `person` argument is `nil`, this method raises an exception.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to OS X v10.6, if the person record is already in the group, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing persons

- [removeMember(\_:)](removemember%28__%29.md): Removes a person from a group.
- [members()](members%28%29.md): Returns an array of persons in a group.

# addMember: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a person to a group.

## Declaration

```objectivec
- (BOOL) addMember:(ABPerson *) person;
```

## Parameters

- `person`: The person record to be added.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `person` argument is already part of the group, this method does nothing and returns [true](https://developer.apple.com/documentation/swift/true). If the `person` argument is `nil`, this method raises an exception.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to OS X v10.6, if the person record is already in the group, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing persons

- [removeMember:](removemember%28__%29.md): Removes a person from a group.
- [members](members%28%29.md): Returns an array of persons in a group.
