> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abgroup/members()

# members() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of persons in a group.

## Declaration

```swift
func members() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t contain any people, this method returns an empty array.

## See Also

### Managing persons

- [addMember(\_:)](addmember%28__%29.md): Adds a person to a group.
- [removeMember(\_:)](removemember%28__%29.md): Removes a person from a group.

# members (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of persons in a group.

## Declaration

```objectivec
- (NSArray *) members;
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t contain any people, this method returns an empty array.

## See Also

### Managing persons

- [addMember:](addmember%28__%29.md): Adds a person to a group.
- [removeMember:](removemember%28__%29.md): Removes a person from a group.
