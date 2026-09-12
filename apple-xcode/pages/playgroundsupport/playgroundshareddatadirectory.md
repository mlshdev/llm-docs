> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundshareddatadirectory](https://developer.apple.com/documentation/playgroundsupport/playgroundshareddatadirectory)

# playgroundSharedDataDirectory

**Framework:** Playground Support  
**Kind:** Global Variable  
**Availability:** macOS 11.0+ · Xcode 12.0+

The path to the directory containing data shared between all playgrounds in Xcode.

## Declaration

```swift
let playgroundSharedDataDirectory: URL
```

<a id="discussion"></a>

## Discussion

Use this directory to store data that must be persisted between playground runs or shared between multiple playgrounds.

## See Also

### Data Persistence

- [PlaygroundKeyValueStore](playgroundkeyvaluestore.md): A data storage container you use to persist information across different sessions.
- [PlaygroundValue](playgroundvalue.md): The types you can save in the key-value store or send in messages to live views.
