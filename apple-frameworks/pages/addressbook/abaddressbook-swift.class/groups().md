> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/groups()

# groups() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of all the groups in the Address Book database.

## Declaration

```swift
func groups() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array of all the groups in the Address Book database.

<a id="Discussion"></a>

## Discussion

If the database doesn’t contain any groups, this method returns an empty array.

## See Also

### Retrieving Groups and People

- [people()](people%28%29.md): Returns an array of all the people in the Address Book database.

# groups (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of all the groups in the Address Book database.

## Declaration

```objectivec
- (NSArray *) groups;
```

<a id="return-value"></a>

## Return Value

An array of all the groups in the Address Book database.

<a id="Discussion"></a>

## Discussion

If the database doesn’t contain any groups, this method returns an empty array.

## See Also

### Retrieving Groups and People

- [people](people%28%29.md): Returns an array of all the people in the Address Book database.
