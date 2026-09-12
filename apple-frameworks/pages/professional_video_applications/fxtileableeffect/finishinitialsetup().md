> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/finishinitialsetup()](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/finishinitialsetup())

# finishInitialSetup() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.

## Declaration

```swift
optional func finishInitialSetup() throws
```

<a id="discussion"></a>

## Discussion

This is called after [init(apiManager:)](init%28apimanager_%29-6vvaz.md), [addParameters()](addparameters%28%29.md), and [properties(\_:)](properties%28__%29.md).

> **Note**

>  This method will never be called by Final Cut Pro as it was called when the plug-in was initially added to the template in Motion.

## See Also

### Setting up your plug-in

- [init(apiManager:)](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [pluginInstanceAddedToDocument()](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties(\_:)](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

# finishInitialSetup: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.

## Declaration

```objectivec
- (BOOL) finishInitialSetup:(NSError * *) error;
```

## Parameters

- `error`: Any errors that occurred doing initial setup.

<a id="return-value"></a>

## Return Value

Return `YES` if your plug-in was successfully able to set itself up. Return `NO` otherwise and set the error parameter to an `NSError` created with the [FxPlugErrorDomain](../fxplugerrordomain.md).

<a id="discussion"></a>

## Discussion

This is called after [initWithAPIManager:](init%28apimanager_%29-6vvaz.md), [addParametersWithError:](addparameters%28%29.md), and [properties:error:](properties%28__%29.md).

> **Note**

>  This method will never be called by Final Cut Pro as it was called when the plug-in was initially added to the template in Motion.

## See Also

### Setting up your plug-in

- [initWithAPIManager:](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [pluginInstanceAddedToDocument](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties:error:](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.
