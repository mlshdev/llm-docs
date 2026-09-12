> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/refreshpirparameters()](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/refreshpirparameters())

# refreshPIRParameters()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Refetches PIR parameters from the server.

## Declaration

```swift
func refreshPIRParameters() async throws
```

<a id="discussion"></a>

## Discussion

In most cases, you don’t need to perform an explicit refetch because the PIR system on the device refetches PIR parameters from the server periodically to stay up-to-date with the server side. However, in the case of a significant server database change, PIR parameters may change. In this case, you may want to trigger an explicit refresh to make the new set of PIR parameters effective immediately.

The following events can cause PIR parameters to change:

- Re-processing the dataset.
- Changing shard count.
- Changing encryption parameters.
- Changing per-shard cuckoo hash table size (note: per-shard entry count can change while the cuckoo hash table stays fixed size).
- Changing of cuckoo hashing parameters.

## See Also

### Working with a Private Information Retrieval server

- [pirServerURL](pirserverurl.md): A URL that contains the domain name of the PIR server.
- [pirPrivacyPassIssuerURL](pirprivacypassissuerurl.md): A URL that contains the domain name of Privacy Pass issuer.
- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.
