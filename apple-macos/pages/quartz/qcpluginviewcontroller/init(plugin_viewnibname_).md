> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginviewcontroller/init(plugin:viewnibname:)](https://developer.apple.com/documentation/quartz/qcpluginviewcontroller/init(plugin:viewnibname:))

# init(plugIn:viewNibName:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates and initializes a controller for the specified `QCPlugIn` object and nib file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(plugIn: QCPlugIn!, viewNibName name: String!)
```

## Parameters

- `plugIn`: A `QCPlugIn` object that uses internal settings.
- `name`: The name of the nib file that contains the view for the custom patch.

<a id="return-value"></a>

## Return Value

A `QCPlugInViewController` object.

# initWithPlugIn:viewNibName: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates and initializes a controller for the specified `QCPlugIn` object and nib file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithPlugIn:(QCPlugIn *) plugIn viewNibName:(NSString *) name;
```

## Parameters

- `plugIn`: A `QCPlugIn` object that uses internal settings.
- `name`: The name of the nib file that contains the view for the custom patch.

<a id="return-value"></a>

## Return Value

A `QCPlugInViewController` object.
