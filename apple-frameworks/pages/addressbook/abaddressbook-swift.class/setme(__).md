> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/setme(_:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/setme(_:))

# setMe(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the record that represents the logged-in user.

## Declaration

```swift
func setMe(_ moi: ABPerson!)
```

## Parameters

- `moi`: The person to set as representing the logged-in user.

<a id="Discussion"></a>

## Discussion

If you don’t want a record to represent the logged-in user, then pass `nil` as the `person` argument. Note that this will not delete the existing record, if one is set.

## See Also

### Setting and Retrieving the Logged-in User’s Record

- [me()](me%28%29.md): Returns the `ABPerson` record that represents the logged-in user.

# setMe: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the record that represents the logged-in user.

## Declaration

```objectivec
- (void) setMe:(ABPerson *) moi;
```

## Parameters

- `moi`: The person to set as representing the logged-in user.

<a id="Discussion"></a>

## Discussion

If you don’t want a record to represent the logged-in user, then pass `nil` as the `person` argument. Note that this will not delete the existing record, if one is set.

## See Also

### Setting and Retrieving the Logged-in User’s Record

- [me](me%28%29.md): Returns the `ABPerson` record that represents the logged-in user.
