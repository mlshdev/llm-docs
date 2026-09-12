> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiscenesessionroleimmersivespaceapplication/uisceneinitialimmersionstyle](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiscenesessionroleimmersivespaceapplication/uisceneinitialimmersionstyle)

# UISceneInitialImmersionStyle

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 1.0+

Provide a preferred initial scene style for an immersive space scene.

## Details

`UISceneInitialImmersionStyle`

## Possible Values

- `UIImmersionStyleFull`:
- `UIImmersionStyleMixed`:
- `UIImmersionStyleProgressive`:

<a id="Discussion"></a>

## Discussion

Use [UISceneInitialImmersionStyle](uisceneinitialimmersionstyle.md) to configure the initial style for the system to use to create an immersive space scene for your app.

> **Note**

>  The system uses an appropriate alternate when the environment can’t support the preferred style you specify.
