> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/init(_:)

# init(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes an accessory message using a result builder closure.

## Declaration

```swift
init(@AccessoryMessage.Builder _ builder: () -> AccessoryMessage)
```

## Parameters

- `builder`: A closure that returns an accessory message using the result builder syntax.

## See Also

### Creating messages

- [AccessoryMessage.Builder](builder.md): A builder that constructs accessory messages declaratively.
