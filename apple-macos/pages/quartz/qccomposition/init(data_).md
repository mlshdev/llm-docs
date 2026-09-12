> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccomposition/init(data:)](https://developer.apple.com/documentation/quartz/qccomposition/init(data:))

# init(data:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a composition object  initialized with the contents of a Quartz Composer composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(data: Data!)
```

## Parameters

- `data`: The contents of a file created with the Quartz Composer developer tool.

<a id="return-value"></a>

## Return Value

A Quartz Composer composition object or `nil` if there is an error.

## See Also

### Creating a Composition

- [init(file:)](init%28file_%29.md): Deprecated. Returns a composition object initialized with a Quartz Composer composition file.

# compositionWithData: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a composition object  initialized with the contents of a Quartz Composer composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (QCComposition *) compositionWithData:(NSData *) data;
```

## Parameters

- `data`: The contents of a file created with the Quartz Composer developer tool.

<a id="return-value"></a>

## Return Value

A Quartz Composer composition object or `nil` if there is an error.

## See Also

### Creating a Composition

- [compositionWithFile:](init%28file_%29.md): Deprecated. Returns a composition object initialized with a Quartz Composer composition file.
