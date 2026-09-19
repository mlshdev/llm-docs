> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/startservice(provider:)

# startService(provider:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Starts the system extension.

## Declaration

```swift
class func startService(provider: CMIOExtensionProvider)
```

## Parameters

- `provider`: A provider to start.

# startServiceWithProvider: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Starts the system extension.

## Declaration

```objectivec
+ (void) startServiceWithProvider:(CMIOExtensionProvider *) provider;
```

## Parameters

- `provider`: A provider to start.
