type IMachineState = State<IMachineContext, AnyEventObject, any, {
  value: any;
  context: IMachineContext;
}, ResolveTypegenMeta<TypegenDisabled, AnyEventObject, BaseActionObject, ServiceMap>>;

type IMachineSender = (event: SCXML.Event<AnyEventObject> | SingleOrArray<Event<AnyEventObject>>, payload?: EventData | undefined) 
=> State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;


interface IMachineContext {
  passengers: string[]
  selectedCountry:string
  countries:CountryModel
  error:string
}