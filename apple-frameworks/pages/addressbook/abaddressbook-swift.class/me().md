> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/me()

# me() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `ABPerson` record that represents the logged-in user.

## Declaration

```swift
func me() -> ABPerson!
```

<a id="return-value"></a>

## Return Value

The `ABPerson` record that represents the logged-in user.

<a id="Discussion"></a>

## Discussion

If the user never specified such a record, this method returns `nil`.

## See Also

### Setting and Retrieving the Logged-in User’s Record

- [setMe(\_:)](setme%28__%29.md): Sets the record that represents the logged-in user.

# me (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `ABPerson` record that represents the logged-in user.

## Declaration

```objectivec
- (ABPerson *) me;
```

<a id="return-value"></a>

## Return Value

The `ABPerson` record that represents the logged-in user.

<a id="Discussion"></a>

## Discussion

If the user never specified such a record, this method returns `nil`.

## See Also

### Setting and Retrieving the Logged-in User’s Record

- [setMe:](setme%28__%29.md): Sets the record that represents the logged-in user.
