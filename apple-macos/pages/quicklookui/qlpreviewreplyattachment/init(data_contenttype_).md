> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewreplyattachment/init(data:contenttype:)

# init(data:contentType:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a preview reply attachment with the specified type.

## Declaration

```swift
init(data: Data, contentType: UTType)
```

## Parameters

- `data`: The content of the attachment.
- `contentType`: The type of the attachment.

# initWithData:contentType: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a preview reply attachment with the specified type.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data contentType:(UTType *) contentType;
```

## Parameters

- `data`: The content of the attachment.
- `contentType`: The type of the attachment.
