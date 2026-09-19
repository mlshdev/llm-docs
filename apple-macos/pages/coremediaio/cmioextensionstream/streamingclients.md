> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionstream/streamingclients

# streamingClients (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of clients of the stream.

## Declaration

```swift
var streamingClients: [CMIOExtensionClient] { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

# streamingClients (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of clients of the stream.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSArray<CMIOExtensionClient *> * streamingClients;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.
