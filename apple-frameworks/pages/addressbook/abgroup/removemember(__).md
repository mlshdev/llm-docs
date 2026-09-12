> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/removemember(_:)](https://developer.apple.com/documentation/addressbook/abgroup/removemember(_:))

# removeMember(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes a person from a group.

## Declaration

```swift
func removeMember(_ person: ABPerson!) -> Bool
```

## Parameters

- `person`: The person to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `person` argument is not in the group, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If `person` is `nil`, this method raises an exception.

## See Also

### Managing persons

- [addMember(\_:)](addmember%28__%29.md): Adds a person to a group.
- [members()](members%28%29.md): Returns an array of persons in a group.

# removeMember: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes a person from a group.

## Declaration

```objectivec
- (BOOL) removeMember:(ABPerson *) person;
```

## Parameters

- `person`: The person to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `person` argument is not in the group, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If `person` is `nil`, this method raises an exception.

## See Also

### Managing persons

- [addMember:](addmember%28__%29.md): Adds a person to a group.
- [members](members%28%29.md): Returns an array of persons in a group.
