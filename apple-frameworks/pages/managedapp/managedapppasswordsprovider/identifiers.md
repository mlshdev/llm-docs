> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedapppasswordsprovider/identifiers](https://developer.apple.com/documentation/managedapp/managedapppasswordsprovider/identifiers)

# identifiers

**Framework:** ManagedApp  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

An asynchronous sequence of arrays of password identifiers provided by the MDM server.

## Declaration

```swift
var identifiers: some AsyncSequence<Array<String>, Never> { get async }
```

<a id="discussion"></a>

## Discussion

Use [password(withIdentifier:)](password%28withidentifier_%29.md) to look up an identifier to obtain the associated password. The sequence yields an array of identifiers when:

- You begin iterating this property using `for await`.
- The list of password identifiers changes.
- The value of one or more passwords changes.

You define the values of the identifiers that an MDM admin can use. Define specific individual values or ranges of values to group passwords, or use the configuration to determine the meaning of the identifiers.

This property yields an empty array if the MDM admin hasn’t provisioned any passwords for your app.
