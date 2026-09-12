> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/whenusersignsin](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/whenusersignsin)

# whenUserSignsIn

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns an object representing a deferred or asynchronous operation that resolves when the user signs in.

## Declaration

```
Promise<CloudKit.UserIdentity, CloudKit.CKError> whenUserSignsIn();
```

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.UserIdentity](../cloudkit.useridentity.md) dictionary when the user signs in, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

Use the [whenUserSignsIn](whenusersignsin.md) method to call a function when the user signs in.

```javascript
myContainer.whenUserSignsIn().then(function(userIdentity) {
    // The user signed in
});
```

## See Also

### Authenticating Users

- [setUpAuth](setupauth.md): Determines whether a user is signed in and presents an appropriate sign in or sign out button.
- [whenUserSignsOut](whenusersignsout.md): Returns an object representing a deferred or asynchronous operation that resolves when the user signs out.
