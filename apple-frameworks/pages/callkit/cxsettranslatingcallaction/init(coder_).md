> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxsettranslatingcallaction/init(coder:)

# init(coder:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new action to start or stop translating a call with the provided data.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: An unarchiver object.

# initWithCoder: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new action to start or stop translating a call with the provided data.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: An unarchiver object.
