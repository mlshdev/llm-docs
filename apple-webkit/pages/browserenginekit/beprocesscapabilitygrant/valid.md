> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapabilitygrant/valid](https://developer.apple.com/documentation/browserenginekit/beprocesscapabilitygrant/valid)

# valid

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A Boolean value that indicates whether the system grants the capability.

## Declaration

```objectivec
@property (readonly, getter=isValid) BOOL valid;
```

<a id="discussion"></a>

## Discussion

The system sets this property to `true` if the system grants the capability; otherwise, the value is `false`.

## See Also

### Testing and changing validity

- [invalidate](invalidate.md): Revokes access to a capability.
