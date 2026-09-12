> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccomposition/init(file:)](https://developer.apple.com/documentation/quartz/qccomposition/init(file:))

# init(file:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a composition object initialized with a Quartz Composer composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(file path: String!)
```

## Parameters

- `path`: A path to a file created with the Quartz Composer developer tool (`.qtz` extension).

<a id="return-value"></a>

## Return Value

A Quartz Composer composition object or `nil` if there is an error.

## See Also

### Creating a Composition

- [init(data:)](init%28data_%29.md): Deprecated. Returns a composition object initialized with the contents of a Quartz Composer composition file.

# compositionWithFile: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a composition object initialized with a Quartz Composer composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (QCComposition *) compositionWithFile:(NSString *) path;
```

## Parameters

- `path`: A path to a file created with the Quartz Composer developer tool (`.qtz` extension).

<a id="return-value"></a>

## Return Value

A Quartz Composer composition object or `nil` if there is an error.

## See Also

### Creating a Composition

- [compositionWithData:](init%28data_%29.md): Deprecated. Returns a composition object initialized with the contents of a Quartz Composer composition file.
