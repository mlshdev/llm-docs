> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphshapedtype/init(shape:datatype:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphshapedtype/init(shape:datatype:))

# init(shape:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a shaped type.

## Declaration

```swift
init(shape: [NSNumber]?, dataType: MPSDataType)
```

## Parameters

- `shape`: The shape of the shaped type.
- `dataType`: The dataType of the shaped type.

<a id="return-value"></a>

## Return Value

A valid MPSGraphShapedType, or nil if allocation failure.

# initWithShape:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a shaped type.

## Declaration

```objectivec
- (instancetype) initWithShape:(MPSShape *) shape dataType:(MPSDataType) dataType;
```

## Parameters

- `shape`: The shape of the shaped type.
- `dataType`: The dataType of the shaped type.

<a id="return-value"></a>

## Return Value

A valid MPSGraphShapedType, or nil if allocation failure.
