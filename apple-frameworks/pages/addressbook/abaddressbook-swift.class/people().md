> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/people()

# people() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of all the people in the Address Book database.

## Declaration

```swift
func people() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array of all the people in the Address Book database.

<a id="Discussion"></a>

## Discussion

If the database doesn’t contain any people, this method returns an empty array.

## See Also

### Retrieving Groups and People

- [groups()](groups%28%29.md): Returns an array of all the groups in the Address Book database.

# people (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of all the people in the Address Book database.

## Declaration

```objectivec
- (NSArray *) people;
```

<a id="return-value"></a>

## Return Value

An array of all the people in the Address Book database.

<a id="Discussion"></a>

## Discussion

If the database doesn’t contain any people, this method returns an empty array.

## See Also

### Retrieving Groups and People

- [groups](groups%28%29.md): Returns an array of all the groups in the Address Book database.
