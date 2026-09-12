> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent](https://developer.apple.com/documentation/intents/insettaskattributeintent)

# INSetTaskAttributeIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to modify the attributes of a task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSetTaskAttributeIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSetTaskAttributeIntent](insettaskattributeintent.md) object when the user marks a task as complete or changes the triggers used to generate reminders for the task. The intent object can contain the task information and values for any changed attributes.

To handle this intent, the handler object in your Intents extension must adopt the [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md) protocol. Your handler should confirm the request and create an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to modify task attributes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Mark dry cleaning as complete on `<appName>` | Check call dad off my to do list |
| zh_CN | 标记干洗为结束(在 `<appName>` 上) | 把给爸爸打电话从待办事项列表里面去掉 |
| zh_HK | 喺 `<appName>` 入面將乾洗標示為完成 | 剔咗待辦事項列表入面嘅打電話俾爸爸 |
| zh_TW | 標記乾洗為完成(在 `<appName>` 上) | 從我的待辦事項列表中刪除打電話給爸爸 |
| yue_CN | 喺 `<appName>` 入面将干洗标示为完成 | 剔咗待办事项列表入面嘅打电话俾爸爸 |
| ar | ضع علامة على تنظيف الملابس بأنه مكتمل  `<appName>`على | قم بإلغاء الاتصال على أبي من قائمة الأعمال |
| da | marker rensning som færdiggjort i `<appName>` | marker ring til far som færdig i min at gøre liste |
| de | Markiere Reinigung als erledigt auf `<appName>` | Hake Papa anrufen auf meiner Erinnerungsliste ab |
| es | Marca tintorería como completado en `<appName>` | Tacha llamar a papá de mi lista de cosas por hacer |
| fi | Merkitse auton pesu suoritetuksi apissa `<appName>` | Merkitse soita isälle suoritetuksi tehtävälistalla |
| fr | Marque laver le linge comme terminé sur `<appName>` | Supprime appeler papa de ma liste de choses à faire |
| he | תסמני ניקוי יבש כהושלם ב | תסמני את להתקשר לאבא ברשימת הדברים לעשות |
| it | Segna pulizia a secco come completato su `<appName>` | Segna chiamare papà come fatto sulla mia lista da fare |
| ja | `<appName>` でドライクリーニングを完了済みにして | Todoリストにある父に電話に完了のマークをつけて |
| ko | `<appName>` 에서 드라이 클리닝을 완료로 표시해줘 | 아빠에게 전화하기를 내 할 일 목록에서 체크하기 |
| ms | Tandakan cucian kering selesai pada `<appName>` | Tandakan panggil ayah sebagai selesai pada senarai tugasan |
| nb | Marker klesvask som utført i `<appName>` | Huk av ringe pappa på gjørelisten min |
| nl | Markeer stomerij als voltooid in `<appName>` | Vink papa bellen af op mijn takenlijst |
| pt | Marcar lavagem a seco como concluída no `<appName>` | Marcar ligar para o pai como concluído na minha lista de tarefas |
| ru | Пометить химчистку как завершенную в `<appName>` | Отметь позвонить папе в моём списке дел |
| sv | Markera tvätta som avklarad i `<appName>` | Bocka av ring pappa från min att göra-lista |
| th | ทำเครื่องหมายว่าเสร็จแล้วที่ซักแห้งบนแอพ `<appName>` | ทำเครื่องหมายโทรหาพ่อว่าเสร็จแล้วในรายการสิ่งที่ต้องทำ |
| tr | `<appName>`’de kuru temizlemeyi yapıldı olarak işaretle | Ödevlerim listesindeki son anımsatıcıyı yapıldı işaretle |

In table above, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [init(targetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger:)](insettaskattributeintent/init%28targettask_tasktitle_status_priority_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.
- [init(targetTask:status:spatialEventTrigger:temporalEventTrigger:)](insettaskattributeintent/init%28targettask_status_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.

### Getting the Task Information

- [priority](insettaskattributeintent/priority.md): Deprecated. The priority for the task.
- [taskTitle](insettaskattributeintent/tasktitle.md): Deprecated. The title for the task.
- [targetTask](insettaskattributeintent/targettask.md): Deprecated. The task targetted for modification.
- [status](insettaskattributeintent/status.md): Deprecated. The status to apply to the task.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Getting the Triggers

- [temporalEventTrigger](insettaskattributeintent/temporaleventtrigger.md): Deprecated. The time-based trigger to apply to the task.
- [spatialEventTrigger](insettaskattributeintent/spatialeventtrigger.md): Deprecated. The location-based trigger to apply to the task.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Attributes

- [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md): Deprecated. The handler interface for updating the attributes of an existing task.
- [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md): Deprecated. Your response to a request to modify the attributes of an existing task.

# INSetTaskAttributeIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to modify the attributes of a task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSetTaskAttributeIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSetTaskAttributeIntent](insettaskattributeintent.md) object when the user marks a task as complete or changes the triggers used to generate reminders for the task. The intent object can contain the task information and values for any changed attributes.

To handle this intent, the handler object in your Intents extension must adopt the [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md) protocol. Your handler should confirm the request and create an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to modify task attributes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Mark dry cleaning as complete on `<appName>` | Check call dad off my to do list |
| zh_CN | 标记干洗为结束(在 `<appName>` 上) | 把给爸爸打电话从待办事项列表里面去掉 |
| zh_HK | 喺 `<appName>` 入面將乾洗標示為完成 | 剔咗待辦事項列表入面嘅打電話俾爸爸 |
| zh_TW | 標記乾洗為完成(在 `<appName>` 上) | 從我的待辦事項列表中刪除打電話給爸爸 |
| yue_CN | 喺 `<appName>` 入面将干洗标示为完成 | 剔咗待办事项列表入面嘅打电话俾爸爸 |
| ar | ضع علامة على تنظيف الملابس بأنه مكتمل  `<appName>`على | قم بإلغاء الاتصال على أبي من قائمة الأعمال |
| da | marker rensning som færdiggjort i `<appName>` | marker ring til far som færdig i min at gøre liste |
| de | Markiere Reinigung als erledigt auf `<appName>` | Hake Papa anrufen auf meiner Erinnerungsliste ab |
| es | Marca tintorería como completado en `<appName>` | Tacha llamar a papá de mi lista de cosas por hacer |
| fi | Merkitse auton pesu suoritetuksi apissa `<appName>` | Merkitse soita isälle suoritetuksi tehtävälistalla |
| fr | Marque laver le linge comme terminé sur `<appName>` | Supprime appeler papa de ma liste de choses à faire |
| he | תסמני ניקוי יבש כהושלם ב | תסמני את להתקשר לאבא ברשימת הדברים לעשות |
| it | Segna pulizia a secco come completato su `<appName>` | Segna chiamare papà come fatto sulla mia lista da fare |
| ja | `<appName>` でドライクリーニングを完了済みにして | Todoリストにある父に電話に完了のマークをつけて |
| ko | `<appName>` 에서 드라이 클리닝을 완료로 표시해줘 | 아빠에게 전화하기를 내 할 일 목록에서 체크하기 |
| ms | Tandakan cucian kering selesai pada `<appName>` | Tandakan panggil ayah sebagai selesai pada senarai tugasan |
| nb | Marker klesvask som utført i `<appName>` | Huk av ringe pappa på gjørelisten min |
| nl | Markeer stomerij als voltooid in `<appName>` | Vink papa bellen af op mijn takenlijst |
| pt | Marcar lavagem a seco como concluída no `<appName>` | Marcar ligar para o pai como concluído na minha lista de tarefas |
| ru | Пометить химчистку как завершенную в `<appName>` | Отметь позвонить папе в моём списке дел |
| sv | Markera tvätta som avklarad i `<appName>` | Bocka av ring pappa från min att göra-lista |
| th | ทำเครื่องหมายว่าเสร็จแล้วที่ซักแห้งบนแอพ `<appName>` | ทำเครื่องหมายโทรหาพ่อว่าเสร็จแล้วในรายการสิ่งที่ต้องทำ |
| tr | `<appName>`’de kuru temizlemeyi yapıldı olarak işaretle | Ödevlerim listesindeki son anımsatıcıyı yapıldı işaretle |

In table above, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [initWithTargetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger:](insettaskattributeintent/init%28targettask_tasktitle_status_priority_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.
- [initWithTargetTask:status:spatialEventTrigger:temporalEventTrigger:](insettaskattributeintent/init%28targettask_status_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.

### Getting the Task Information

- [priority](insettaskattributeintent/priority.md): Deprecated. The priority for the task.
- [taskTitle](insettaskattributeintent/tasktitle.md): Deprecated. The title for the task.
- [targetTask](insettaskattributeintent/targettask.md): Deprecated. The task targetted for modification.
- [status](insettaskattributeintent/status.md): Deprecated. The status to apply to the task.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Getting the Triggers

- [temporalEventTrigger](insettaskattributeintent/temporaleventtrigger.md): Deprecated. The time-based trigger to apply to the task.
- [spatialEventTrigger](insettaskattributeintent/spatialeventtrigger.md): Deprecated. The location-based trigger to apply to the task.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Task Attributes

- [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md): Deprecated. The handler interface for updating the attributes of an existing task.
- [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md): Deprecated. Your response to a request to modify the attributes of an existing task.
