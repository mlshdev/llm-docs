> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkdrawingreference/init(strokes:)

# init(strokes:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a drawing object with the strokes you supply.

## Declaration

```swift
convenience init(strokes: [PKStroke])
```

## Parameters

- `strokes`: An array of [PKStrokeReference](../pkstrokereference.md) elements.

## See Also

### Creating a drawing object

- [init(data:)](init%28data_%29.md): Creates a drawing object and populates it with previously drawn content.
- [init()](init%28%29.md): Creates an empty drawing object.

# initWithStrokes: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a drawing object with the strokes you supply.

## Declaration

```objectivec
- (instancetype) initWithStrokes:(NSArray<PKStroke *> *) strokes;
```

## Parameters

- `strokes`: An array of [PKStroke](../pkstrokereference.md) elements.

## See Also

### Creating a drawing object

- [initWithData:error:](init%28data_%29.md): Creates a drawing object and populates it with previously drawn content.
- [init](init%28%29.md): Creates an empty drawing object.
