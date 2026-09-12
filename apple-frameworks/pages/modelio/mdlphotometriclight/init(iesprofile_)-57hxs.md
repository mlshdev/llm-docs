> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight/init(iesprofile:)-57hxs](https://developer.apple.com/documentation/modelio/mdlphotometriclight/init(iesprofile:)-57hxs)

# init(iesProfile:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a light from photometry data in the file at the specified URL.

## Declaration

```swift
init?(iesProfile URL: URL)
```

## Parameters

- `URL`: The URL to a file containing photometric data.

<a id="return-value"></a>

## Return Value

A new light object.

# initWithIESProfile: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a light from photometry data in the file at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithIESProfile:(NSURL *) URL;
```

## Parameters

- `URL`: The URL to a file containing photometric data.

<a id="return-value"></a>

## Return Value

A new light object.
