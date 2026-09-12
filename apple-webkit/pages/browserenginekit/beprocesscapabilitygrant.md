> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapabilitygrant](https://developer.apple.com/documentation/browserenginekit/beprocesscapabilitygrant)

# BEProcessCapabilityGrant

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

An object that represents a granted capability.

## Declaration

```objectivec
@protocol BEProcessCapabilityGrant <NSObject>
```

## Topics

### Testing and changing validity

- [valid](beprocesscapabilitygrant/valid.md): A Boolean value that indicates whether the system grants the capability.
- [invalidate](beprocesscapabilitygrant/invalidate.md): Revokes access to a capability.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Extension capabilities

- [BEProcessCapability](beprocesscapability-7av05.md): Capabilities of a helper extension process.
- [BEMediaEnvironment](bemediaenvironment-n91a.md): An object that identifies a media playback or streaming environment.
- [BEWebContentFilter](bewebcontentfilter.md): An object that represents a web content filter.
