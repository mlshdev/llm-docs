> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/whenusersignsout](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/whenusersignsout)

# whenUserSignsOut

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns an object representing a deferred or asynchronous operation that resolves when the user signs out.

## Declaration

```
Promise<Undefined, CloudKit.CKError> whenUserSignsOut();
```

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to `Undefined` when the user signs out, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

Use the [whenUserSignsOut](whenusersignsout.md) method to call a function when the user signs out.

```javascript
myContainer.whenUserSignsOut().then(function() {
    // The user signed out
});
```

## See Also

### Authenticating Users

- [setUpAuth](setupauth.md): Determines whether a user is signed in and presents an appropriate sign in or sign out button.
- [whenUserSignsIn](whenusersignsin.md): Returns an object representing a deferred or asynchronous operation that resolves when the user signs in.
